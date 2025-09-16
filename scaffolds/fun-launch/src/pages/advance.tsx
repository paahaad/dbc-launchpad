import Explore from '@/components/Explore';
import Page from '@/components/ui/Page/Page';

export default function Advance() {
  return (
    <Page>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Advanced Trading</h1>
        <p className="text-xl text-gray-300">
          Explore and trade tokens 🚀
        </p>
      </div>
      <Explore />
    </Page>
  );
}
