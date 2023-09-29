"use client"
import React from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

import { UploadDropzone } from '@/lib/uploadthing'
import '@uploadthing/react/styles.css'

interface FileUploadProps {
    endPoint: "messageFile" | "serverImage",
    value: string,
    onChange: (url?: string) => void
}

const FileUpload = ({ endPoint, value, onChange }: FileUploadProps) => {
    const fileType = value.split(".").pop()
    if (value && fileType !== 'pdf') {
        return (
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt='upload'
                    className='rounded-full'
                />
            </div>
        )
    }
    return (
        <UploadDropzone
            endpoint={endPoint}
            onClientUploadComplete={res => onChange(res?.[0].url)}
            onUploadError={(error: Error) => console.log(error)}
        />
    )
}

export default FileUpload