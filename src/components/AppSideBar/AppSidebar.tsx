import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton
} from '@/components/ui/sidebar'

const sidebarLinks = [
  {
    name: 'Home',
    url: '#'
  },
  {
    name: 'Vendas',
    url: '#'
  },
  {
    name: 'Funcionários',
    url: '#'
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          {sidebarLinks.map((item) => (
            <SidebarMenuButton asChild>
              <a href={item.url}>{item.name}</a>
            </SidebarMenuButton>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
