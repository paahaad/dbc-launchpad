import Explore from '@/components/Explore';
import Page from '@/components/ui/Page/Page';

export default function Index() {
  return (
    <Page>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">DBC Token Launchpad</h1>
        <p className="text-xl text-gray-300">
          Discover and launch tokens with Dynamic Bonding Curves on Solana
        </p>
      </div>
      <Explore />
    </Page>
  );
}
