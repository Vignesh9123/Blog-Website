import Link from "next/link"
export default function BlogCard({props}){
    return(
        <Link href={`/blogs/${encodeURI(props.title)}`}>
        <div className="flex flex-col">
        <div className="text-2xl font-bold">{props.title}</div>
        <div className="text-md font-semibold">{props.excerpt}</div>
        </div>
        </Link>
    )
}