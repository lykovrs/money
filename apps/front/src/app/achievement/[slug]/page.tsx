export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Acheivment: {params.slug}</div>
}
