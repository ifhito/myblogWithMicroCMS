import Head from 'next/head';

type HeadWrapperType = {
    title: string
    description: string
    url: string
    type: string
}
const HeadWrapper = ({
    title,
    description,
    url,
    type
}:HeadWrapperType) => {
    return (
        <Head>
            {/* <html lang='ja' /> */}
            <title>HotakesBlog -{title}-</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={`https://og-image-five-swart.vercel.app/${title}.png`} />
            <meta property="og:image:width" content='1200' />
            <meta property="og:image:height" content='630' />
        </Head>
    )
}

export default HeadWrapper;