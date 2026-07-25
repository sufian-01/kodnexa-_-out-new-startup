export default function Container({ children, className = '', as: Tag = 'div' }) {
  return <Tag className={`section-shell ${className}`}>{children}</Tag>
}
