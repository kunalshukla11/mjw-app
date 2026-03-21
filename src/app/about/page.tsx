import { Group } from '@mantine/core';
import MainLayout from '@/src/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <Group align="center" justify="center">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="p-10 bg-gray-100 rounded-xl shadow-lg text-center max-w-2xl w-full space-y-6">

            <h2 className="text-2xl font-semibold text-gray-800">
              About My Journey Wings
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              <strong>My Journey Wings Travel Services</strong> is founded by <strong>Ashish Mishra</strong>, 
              an MBA in Tourism with extensive experience in creating memorable holidays for thousands of travelers. 
              With deep expertise across popular destinations such as <em>New Zealand, Australia, Europe, Maldives, 
              Mauritius, Singapore, Thailand, Dubai</em>, and domestic circuits, Ashish brings rich industry knowledge 
              and personalized travel planning skills.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Having worked with globally renowned travel leaders like <strong>Kuoni Travel (Zurich)</strong>, 
              <strong>SOTC / Thomas Cook</strong>, and <strong>Cox & Kings (Mumbai)</strong> for more than a decade, 
              he carries forward a legacy of world-class service, trust, and excellence.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 underline">
              What We Offer
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Customized International & Domestic Holidays • Honeymoon Packages • Family Trips • Group Tours (Europe & Worldwide) • 
              Flights • Hotels • Cruises • Cabs • Activities — all at the best value.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 underline">
              Connect With Us
            </h3>

            <p className="text-gray-700 font-medium">
              📞 +91-97921 14666<br />📞 +91-81275 54658
            </p>

            <p className="text-gray-700 font-medium">
              📧 <span className="underline">ashish.mishra@myjourneywings.com</span>
            </p>

            <p className="text-gray-700 italic font-medium">
              “We make your holidays Fun, Safe, Comfortable, Informative & Truly Memorable.”
            </p>

          </div>
        </div>
      </Group>
    </MainLayout>
  );
}
