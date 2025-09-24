import Page from '@/components/ui/Page/Page';
import { TokenGrid } from '@/components/TokenGrid/TokenGrid';
import { ScrollingTicker } from '@/components/ScrollingTicker/ScrollingTicker';

export default function Index() {
  return (
    <Page>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Trending</h2>
        <ScrollingTicker />
      </div>
      <TokenGrid />
    </Page>
  );
}
