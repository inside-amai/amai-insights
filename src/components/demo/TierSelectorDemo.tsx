import { useState } from 'react';
import { TierSelector, STAKE_TIERS } from "@/components/ui/tier-selector";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TierSelectorDemo() {
  const [selectedTier, setSelectedTier] = useState(2); // Start with Legendary
  const { toast } = useToast();

  const handleTierSelect = (tierIndex: number, tier: typeof STAKE_TIERS[0]) => {
    setSelectedTier(tierIndex);
    
    toast({
      title: `${tier.name} Tier Selected`,
      description: `${tier.min.toLocaleString()} AMAI + ${Math.ceil(tier.min / 100)} SUI`,
      duration: 2000,
    });
  };

  const selectedTierData = STAKE_TIERS[selectedTier];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Tier Selector Demo
        </h1>
        
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Select Your Agent Tier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TierSelector
              selectedTier={selectedTier}
              onTierSelect={handleTierSelect}
              className="mt-6 mb-8"
            />
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Current Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-white space-y-2">
              <p><strong>Tier:</strong> {selectedTierData.name}</p>
              <p><strong>AMAI Required:</strong> {selectedTierData.min.toLocaleString()}</p>
              <p><strong>SUI Buffer:</strong> {Math.ceil(selectedTierData.min / 100)}</p>
              <p><strong>Skill Capacity:</strong> {selectedTierData.skillCap === Infinity ? 'Unlimited' : selectedTierData.skillCap}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}