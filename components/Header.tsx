import React, { useContext, useMemo } from 'react'
import Link from 'next/link'

export type TCategories = {
  name: string
  slug: string
}
const categories: TCategories[] = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'web-dev' },
]
function Header() {
  const renderedCategories = useMemo(() => {
    return categories.map((category) => {
      return <Link key={category.slug} href={`/category/${category.slug}`}>
        <span>{category.name}</span>
      </Link>
    })
  }, [])
  return (
    <div>
      <div>
        <div>
          <Link href="/">
            <span>GraphCMS</span>
          </Link>
        </div>
        <div>{renderedCategories}</div>
      </div>
    </div>
  )
}

export default Header
