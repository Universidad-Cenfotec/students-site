"use client";

import { useEffect, useState } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

interface BlogContentProps {
    content: SerializedEditorState;
}

export default function BlogContent ({ content }: BlogContentProps) {
    return (
        <div
            style={ { fontSize: "18px", lineHeight: "1.75", color: "#333" } }
        >
            <RichText data={ content } />
        </div>
    );
}
