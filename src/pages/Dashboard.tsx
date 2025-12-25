import Navbar from "@/components/Navbar";
import EmailFinderCard from "@/components/EmailFinderCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <EmailFinderCard />
          
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Tips
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "Correct Names", desc: "Use names as they appear on LinkedIn" },
                { title: "Domain Only", desc: "Enter company.com, not the full URL" },
                { title: "Be Specific", desc: "Full first and last names work best" },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 border border-border text-left"
                >
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
