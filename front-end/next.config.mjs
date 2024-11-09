/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        formats:['image/avif','image/webp'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:"**",
                pathname:"**"
            }
        ]
    }
};

export default nextConfig;
//https://media2.dev.to/dynamic/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F2387882%2F876d3a9f-68b8-46b9-a102-80bef8db16a7.jpg