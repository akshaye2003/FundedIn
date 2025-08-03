import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  TrendingUp,
  Play,
  CheckCircle,
  Users,
  BarChart3,
  DollarSign,
  Shield,
  MessageCircle,
  LineChart,
} from "lucide-react"
import NavBar from "./nav-bar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        {/* 1. Home Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Trade with confidence on FundedIn
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The premier platform for funded traders. Access advanced tools, real-time data, and compete with top
                    traders worldwide.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth/signup">
                    <Button className="w-full min-[400px]:w-auto bg-primary hover:bg-primary/90 text-black">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-primary text-primary hover:bg-primary/10" 
                    >
                      Log in
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-4xl">
                <Card className="border-2 border-dashed border-primary/50 bg-secondary">
                  <CardContent className="flex flex-col items-center justify-center p-12 space-y-4">
                    <div className="rounded-full bg-primary/10 p-6">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Video explaining what we are and about the evaluation</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Learn about our evaluation process, trading rules, and how you can get funded to trade with our
                      capital
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Building and funding India's Best traders
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our mission</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To become India's most trusted firm supporting individual retail traders with capital to trade
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Finding and Funding The best Traders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                "Trade Stocks, Options with our Capital & with your skill"
              </p>
              <h3 className="text-2xl font-semibold mt-8">Why Trade with us?</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              <Card className="text-center bg-secondary border-secondary">
                <CardContent className="p-6">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Upto 100% Profit split</h4>
                </CardContent>
              </Card>

              <Card className="text-center bg-secondary border-secondary">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">On demand Payouts</h4>
                </CardContent>
              </Card>

              <Card className="text-center bg-secondary border-secondary">
                <CardContent className="p-6">
                  <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Monthly bonus for best traders</h4>
                </CardContent>
              </Card>

              <Card className="text-center bg-secondary border-secondary">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Best trading Platform built by traders</h4>
                </CardContent>
              </Card>

              <Card className="text-center bg-secondary border-secondary">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold mb-2">Upto 18% loss limit and 1 Lakh capital</h4>
                </CardContent>
              </Card>
            </div>

            {/* Funding Plans Section */}
            <div className="mt-16 text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">₹50,000 Funding</h2>
              <p className="text-xl text-muted-foreground">Trade intraday Stocks with ₹3,00,000</p>
              <p className="text-lg font-semibold">One time platform fee of ₹5000</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8 mt-12">
              {/* Phase 1 */}
              <Card className="bg-secondary border-secondary">
                <CardHeader>
                  <CardTitle className="text-center">Phase 1</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Profit target:</strong> 10% (₹5000)
                    </p>
                    <p>
                      <strong>Max loss limit:</strong> 10% (₹5000)
                    </p>
                    <p>
                      <strong>Daily loss limit:</strong> 5% (₹2500)
                    </p>
                    <p>
                      <strong>Loss per trade:</strong> 2.5% (₹1250)
                    </p>
                    <p>
                      <strong>Minimum Trading days:</strong> 15
                    </p>
                    <p>
                      <strong>Time limit:</strong> 40 trading days
                    </p>
                    <p>
                      <strong>Instrument:</strong> Equity, Options
                    </p>
                    <p>
                      <strong>Settlement Type:</strong> Delivery and Intraday
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card className="bg-secondary border-secondary">
                <CardHeader>
                  <CardTitle className="text-center">Phase 2</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Profit target:</strong> 5% (₹2500)
                    </p>
                    <p>
                      <strong>Max loss limit:</strong> 10% (₹5000)
                    </p>
                    <p>
                      <strong>Daily loss limit:</strong> 5% (₹2500)
                    </p>
                    <p>
                      <strong>Loss per trade:</strong> 2.5% (₹1250)
                    </p>
                    <p>
                      <strong>Minimum Trading days:</strong> 10
                    </p>
                    <p>
                      <strong>Time limit:</strong> 45 trading days
                    </p>
                    <p>
                      <strong>Instrument:</strong> Equity, Options
                    </p>
                    <p>
                      <strong>Settlement Type:</strong> Delivery and Intraday
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Funded Bronze */}
              <Card className="relative border-primary border-2 bg-secondary">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black">
                  ₹50,000 Funding
                </Badge>
                <CardHeader>
                  <CardTitle className="text-center">Funded (Bronze)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Profit split:</strong> 80-20
                    </p>
                    <p>
                      <strong>Max loss limit:</strong> 10% (₹5000)
                    </p>
                    <p>
                      <strong>Daily loss limit:</strong> 4% (₹2000)
                    </p>
                    <p>
                      <strong>Loss per trade:</strong> 2.5% (₹1250)
                    </p>
                    <p>
                      <strong>Instrument:</strong> Equity, Options
                    </p>
                    <p>
                      <strong>Settlement Type:</strong> Delivery and Intraday
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Funded Silver */}
              <Card className="relative border-gray-400 border-2 bg-secondary">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-400 text-black">
                  ₹50,000 Funding
                </Badge>
                <CardHeader>
                  <CardTitle className="text-center">Funded (Silver)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Trader achieves Silver when 50% Profit Payout is made in Bronze</strong>
                    </p>
                    <p>
                      <strong>Profit split:</strong> 85-15
                    </p>
                    <p>
                      <strong>Max loss limit:</strong> 18% (₹9000)
                    </p>
                    <p>
                      <strong>Daily loss:</strong> 4% (₹2000)
                    </p>
                    <p>
                      <strong>Loss per trade:</strong> 2.5% (₹1250)
                    </p>
                    <p>
                      <strong>Instrument:</strong> Equity, Options
                    </p>
                    <p>
                      <strong>Settlement Type:</strong> Delivery and Intraday
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Funded Gold */}
              <Card className="relative border-yellow-500 border-2 bg-secondary">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
                  ₹75,000 Funding
                </Badge>
                <CardHeader>
                  <CardTitle className="text-center">Funded (Gold)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Trader achieves Gold when 50% Profit Payout is made in Silver</strong>
                    </p>
                    <p>
                      <strong>Or Split Profit Payout capital increase to ₹100000</strong>
                    </p>
                    <p>
                      <strong>Profit split:</strong> 85-15
                    </p>
                    <p>
                      <strong>Max loss limit:</strong> 18% (₹9000)
                    </p>
                    <p>
                      <strong>Daily loss:</strong> 4% (₹2000)
                    </p>
                    <p>
                      <strong>Loss per trade:</strong> 2.5% (₹1250)
                    </p>
                    <p>
                      <strong>Instrument:</strong> Equity, Options
                    </p>
                    <p>
                      <strong>Settlement Type:</strong> Delivery and Intraday
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group border border-muted rounded-lg">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-semibold">What is the evaluation process?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">
                      Our evaluation process consists of two phases where you need to demonstrate consistent
                      profitability and risk management skills. You'll trade with virtual capital and must meet specific
                      profit targets while staying within loss limits.
                    </p>
                  </div>
                </details>

                <details className="group border border-muted rounded-lg">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-semibold">How do payouts work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">
                      Once you become a funded trader, you can request payouts on demand. We offer profit splits ranging
                      from 80-20 to 100-0 depending on your tier, with monthly bonuses for top performers.
                    </p>
                  </div>
                </details>

                <details className="group border border-muted rounded-lg">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-semibold">What instruments can I trade?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">
                      You can trade equity stocks and options with both delivery and intraday settlement types. Our
                      platform supports all major Indian stock exchanges.
                    </p>
                  </div>
                </details>

                <details className="group border border-muted rounded-lg">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-semibold">What are the risk management rules?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">
                      We have strict risk management rules including maximum daily loss limits (4-5%), maximum loss per
                      trade (2.5%), and overall account loss limits (10-18% depending on tier). These ensure responsible
                      trading practices.
                    </p>
                  </div>
                </details>

                <details className="group border border-muted rounded-lg">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="font-semibold">How do I upgrade to higher tiers?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">
                      You can upgrade from Bronze to Silver after achieving 50% profit payout, and from Silver to Gold
                      after another 50% profit payout or when your capital increases to ₹1,00,000. Higher tiers offer
                      better profit splits and increased capital.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contact Us Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12">
                How Can we help you?
              </h2>
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">Connect with us</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">support@fundedin.org</p>
                      <p className="text-sm text-muted-foreground">Email our team</p>
                    </div>
                    <div>
                      <p className="font-semibold">+91 12345 67890</p>
                      <p className="text-sm text-muted-foreground">Call us</p>
                    </div>
                    <div>
                      <p className="font-semibold">Join our Discord</p>
                      <p className="text-sm text-muted-foreground">Chat with our community and traders</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-input rounded-md bg-secondary text-white"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 border border-input rounded-md bg-secondary text-white"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-input rounded-md bg-secondary text-white"
                    />
                    <Button className="w-fit bg-primary hover:bg-primary/90 text-black">Request a call</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* AI Chat Button */}
      <div className="fixed bottom-6 right-6" >
        <Button size="lg" className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white" style={{ color: 'black' }}>
          <MessageCircle className="h-5 w-5 mr-2" />
          AI chat
        </Button>
      </div>

      <footer className="border-t border-muted py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <TrendingUp className="h-5 w-5" />
            <span>FundedIn</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 FundedIn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
