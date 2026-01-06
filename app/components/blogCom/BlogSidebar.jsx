import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BlogSidebar({title,toc}) {
  return (
    <div className="relative mb-[100px] w-[20%]">
    <aside className="hidden lg:block w- sticky top-[150px] h-fit">
      <div className=" space-y-5">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{title.split(":")[0]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        {/* Table of Contents */}
          {/* TOC */}
        {toc?.length > 0 && (
          <div className="">
            <p className="text-base  font-medium text-gray-900 mb-2">
              On this page
            </p>

            <ul className="space-y-2 text-sm">
              {toc.map((item) => (
                <li
                  key={item.id}
                  className={item.level === 3 ? "ml-4" : ""}
                >
                  <a
                    href={`#${item.id}`}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Share */}
        <div>
          <button className="w-full rounded-md border px-4 py-2 text-sm hover:bg-gray-50">
            Share
          </button>
        </div>

      </div>
    </aside>
    </div>
  );
}
