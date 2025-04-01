import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Car,
  DollarSign,
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  Bell,
  Search,
} from "lucide-react"

// Sample data for charts
const revenueData = [
  { name: "Jan", amount: 1200 },
  { name: "Feb", amount: 1900 },
  { name: "Mar", amount: 1500 },
  { name: "Apr", amount: 2400 },
  { name: "May", amount: 2800 },
  { name: "Jun", amount: 1800 },
  { name: "Jul", amount: 2400 },
]

const pieData = [
  { name: "Street Parking", value: 35 },
  { name: "Market Fees", value: 25 },
  { name: "Bus Park", value: 20 },
  { name: "Cess", value: 15 },
  { name: "Others", value: 5 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const recentTransactions = [
  { id: "TX123456", service: "Street Parking", amount: "KES 100", status: "Completed", date: "Today, 10:23 AM" },
  { id: "TX123455", service: "Market Fee", amount: "KES 250", status: "Completed", date: "Today, 09:45 AM" },
  { id: "TX123454", service: "Bus Park", amount: "KES 300", status: "Pending", date: "Today, 09:30 AM" },
  { id: "TX123453", service: "Cess", amount: "KES 500", status: "Completed", date: "Yesterday, 04:15 PM" },
  { id: "TX123452", service: "SBP Permit", amount: "KES 5000", status: "Failed", date: "Yesterday, 02:30 PM" },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col bg-white shadow-sm md:flex">
        <div className="flex h-16 items-center border-b px-6">
          <h1 className="text-xl font-bold text-teal-600">County Admin</h1>
        </div>
        <nav className="flex flex-1 flex-col p-4">
          <div className="space-y-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center rounded-lg bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700"
            >
              <LayoutDashboard className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/reports"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <FileText className="mr-3 h-5 w-5" />
              Reports
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </div>
          <div className="mt-auto pt-4">
            <Button variant="outline" className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700">
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
          <div className="flex w-full max-w-sm items-center md:ml-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-teal-100 text-center leading-8 text-teal-700">A</div>
              <span className="hidden text-sm font-medium md:inline-block">Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, here's what's happening with your county revenue today.</p>
          </div>

          {/* Stats Cards */}
          <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                    <h3 className="text-2xl font-bold">KES 245,000</h3>
                    <div className="mt-1 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>12% from last month</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-teal-100 p-3 text-teal-600">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Transactions</p>
                    <h3 className="text-2xl font-bold">1,245</h3>
                    <div className="mt-1 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>8% from last month</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Parking Revenue</p>
                    <h3 className="text-2xl font-bold">KES 85,400</h3>
                    <div className="mt-1 flex items-center text-sm text-red-600">
                      <ArrowDownRight className="mr-1 h-4 w-4" />
                      <span>3% from last month</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                    <Car className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Active Users</p>
                    <h3 className="text-2xl font-bold">324</h3>
                    <div className="mt-1 flex items-center text-sm text-green-600">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      <span>18% from last month</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-purple-100 p-3 text-purple-600">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="mb-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="amount" fill="#0ea5e9" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-medium">{tx.id}</TableCell>
                      <TableCell>{tx.service}</TableCell>
                      <TableCell>{tx.amount}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            tx.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : tx.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </TableCell>
                      <TableCell>{tx.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

