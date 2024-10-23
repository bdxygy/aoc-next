"use client";

export default function ErrorComponent({ error, reset }: Readonly<{ error: Error; reset: () => void }>) {
    console.log({ error, reset });
    return <h1>Custom 500</h1>;
}