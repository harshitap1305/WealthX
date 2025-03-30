import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

<<<<<<< HEAD
=======
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

>>>>>>> 882a37f2 (Added pathway)
// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}>Graphical Analytical Section</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Charts & Graphs: Analyze expenses and savings visually with interactive charts.
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
<<<<<<< HEAD
  
=======
  {
    icon: <PieChart className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}> Calendar</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
         View expenses and insights by clicking on a
         date/month.
      </span>
    ),
  },
>>>>>>> 882a37f2 (Added pathway)
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
    title: <span style={{ color: "#e5dbff" }}> Transaction categorization</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        Users can manually categorize transactions.
      </span>
    ),
  },
  {
    icon: <Zap className="h-8 w-8 text-[#e5dbff]" />,
    title: <span style={{ color: "#e5dbff" }}> AI-Powered Query System</span>,
    description: (
      <span style={{ color: "#e5dbff" }}>
        AI model answers queries like “Can I afford a
        ₹50 purchase?”
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
