"use client";

import React, { useEffect, useRef } from "react";

interface WebGLImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const vsSource = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const fsSource = `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uImage;
    uniform float uProgress;

    void main() {
        float cols = 4.0;
        float colIndex = floor(vUv.x * cols);
        float stagger = 0.15;
        float delay = colIndex * stagger;
        float localProgress = clamp((uProgress * (1.0 + 3.0 * stagger) - delay), 0.0, 1.0);
        float f = localProgress - 1.0;
        float ease = f * f * f + 1.0;
        if (vUv.y < 1.0 - ease) {
            discard;
        }
        gl_FragColor = texture2D(uImage, vUv);
    }
`;

export function WebGLImage({ src, className, style }: WebGLImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!canvasRef.current || initialized.current) return;
    initialized.current = true;

    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const compileShader = (type: number, source: string) => {
        const shader = gl.createShader(type)!;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
      };

      const program = gl.createProgram()!;
      gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
      gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
      gl.linkProgram(program);
      gl.useProgram(program);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW
      );

      const positionLocation = gl.getAttribLocation(program, "aPosition");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      const uProgressLoc = gl.getUniformLocation(program, "uProgress");

      let startTime: number | null = null;
      const duration = 1200;

      const render = (time: number) => {
        if (!startTime) startTime = time;
        let progress = (time - startTime) / duration;
        if (progress > 1.0) progress = 1.0;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(uProgressLoc, progress);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        if (progress < 1.0) {
          requestAnimationFrame(render);
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              requestAnimationFrame(render);
              observer.unobserve(canvas);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(canvas);
    };
    img.src = src;
  }, [src]);

  return <canvas ref={canvasRef} className={className} style={style} />;
}
