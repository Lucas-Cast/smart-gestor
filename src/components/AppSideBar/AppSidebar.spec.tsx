import { render, screen, fireEvent } from '@testing-library/react'

import { AppSidebar } from './AppSidebar'
jest.mock('@/components/ui/sidebar', () => ({
  Sidebar: jest.fn(({ children }) => (
    <div data-testid="sidebar">{children}</div>
  )),

  SidebarHeader: jest.fn(() => <div data-testid="sidebar-header" />),

  SidebarContent: jest.fn(({ children }) => (
    <div data-testid="sidebar-content">{children}</div>
  )),

  SidebarFooter: jest.fn(() => <div data-testid="sidebar-footer" />),

  SidebarGroup: jest.fn(({ children }) => (
    <div data-testid="sidebar-group">{children}</div>
  )),

  SidebarMenuButton: jest.fn(({ children, ...props }) => (
    <button data-testid="sidebar-menu-button" {...props}>
      {children}
    </button>
  ))
}))

const renderComponent = () => render(<AppSidebar />)

describe('AsideNav', () => {
  it('should render correctly', () => {
    renderComponent()

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Vendas')).toBeInTheDocument()
    expect(screen.getByText('Funcionários')).toBeInTheDocument()
  })

  it('should click Home correctly', () => {
    renderComponent()
    const btnHome = screen.getByText('Home')

    fireEvent.click(btnHome)
  })

  it('should click Funcionários correctly', () => {
    renderComponent()
    const btnFuncionarios = screen.getByText('Funcionários')

    fireEvent.click(btnFuncionarios)
  })
  it('should click Vendas correctly', () => {
    renderComponent()
    const btnVendas = screen.getByText('Vendas')

    fireEvent.click(btnVendas)
  })
})
