import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarTrigger
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
    <>
      <Sidebar className="text-sidebar-foreground">
        <SidebarHeader>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            {sidebarLinks.map((item, index) => (
              <SidebarMenuButton key={index} asChild>
                <a href={item.url}>{item.name}</a>
              </SidebarMenuButton>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </>
  )
}
