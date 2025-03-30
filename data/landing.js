import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "10K+",
    label: <span style={{ color: "#e5dbff" }}>Active Users</span>,
  },
  {
    value: "$2M+",
    label: <span style={{ color: "#e5dbff" }}>Transactions Tracked</span>,
  },
  {
    value: "99.9%",
    label: <span style={{ color: "#e5dbff" }}>Uptime</span>,
  },
  {
    value: "4.5/5",
    label: <span style={{ color: "#e5dbff" }}>User Rating</span>,
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Advanced Analytics</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Get detailed insights into your spending patterns with AI-powered
        analytics
      </span>
    ),
  },
  {
    icon: <Receipt className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Smart Receipt Scanner</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Extract data automatically from receipts using advanced AI technology
      </span>
    ),
  },
  {
    icon: <PieChart className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Budget Planning</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Create and manage budgets with intelligent recommendations
      </span>
    ),
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Multi-Account Support</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Manage multiple accounts and credit cards in one place
      </span>
    ),
  },
  {
    icon: <Globe className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Multi-Currency</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Support for multiple currencies with real-time conversion
      </span>
    ),
  },
  {
    icon: <Zap className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Automated Insights</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Get automated financial insights and recommendations
      </span>
    ),
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>1. Create Your Account</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Get started in minutes with our simple and secure sign-up process
      </span>
    ),
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>2. Track Your Spending</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Automatically categorize and track your transactions in real-time
      </span>
    ),
  },
  {
    icon: <PieChart className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>3. Get Insights</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Receive AI-powered insights and recommendations to optimize your
        finances
      </span>
    ),
  },
];
