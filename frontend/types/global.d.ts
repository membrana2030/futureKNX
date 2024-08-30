export { }

declare global {
    type ProductSample = {
        [key: string]: any,
        base: string,
        samples: string[] | Promise[],
        title: string,
        subtitle?: string,
        content?: string[],
        link?: string,
        background?: any,
    }

    type DownloadLink = {
        [key: string]: any,
        title: string,
        href: string,
        format?: string,
        size?: number | string,
        download?: string,
        target?: string,
    }

    type SystemDevice = {
        [key: string]: any,
        slug: string,
        key: string,
        code: string,
        title: string,
        subtitle?: string,
        image: Promise<any>,
        content: string[],
        ar?: string,
        scale?: string | number,
        cameraOrbit?: string,
        cameraTarget?: string,
        arEnabled?: boolean,
        dimension?: {
            width?: string,
            height?: string,
            length?: string,
            weight?: string,
        },
        downloads?: DownloadLink[],
        description?: string,
    }

    type SubscribeData = {
        [key: string]: any,
        email: string,
        name?: string
    }
}
