// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">AMAI Platform</h1>
        <p className="text-xl text-muted-foreground mb-8">Autonomous AI Infrastructure on Sui Blockchain</p>
        <div className="space-x-4">
          <a 
            href="/explainer" 
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Explainer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
