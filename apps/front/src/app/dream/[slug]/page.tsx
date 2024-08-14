export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Dream: {params.slug}</div>
}
