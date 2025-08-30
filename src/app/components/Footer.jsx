// pages/index.js

export default function Home() {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-[rgb(33,33,33,1)] text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Our Top Cities Section */}
          <div className="grid grid-cols-2 text-gray-300 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="font-extrabold text-lg mb-2 ">Our top cities</h3>
              <ul>
                <li>San Francisco</li>
                <li>Miami</li>
                <li>San Diego</li>
                <li>East Bay</li>
                <li>Long Beach</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Los Angeles</li>
                <li>Washington DC</li>
                <li>Seattle</li>
                <li>Portland</li>
                <li>Nashville</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>New York City</li>
                <li>Orange County</li>
                <li>Atlanta</li>
                <li>Charlotte</li>
                <li>Denver</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Chicago</li>
                <li>Phoenix</li>
                <li>Las Vegas</li>
                <li>Sacramento</li>
                <li>Oklahoma City</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Columbus</li>
                <li>New Mexico</li>
                <li>Albuquerque</li>
                <li>Sacramento</li>
                <li>New Orleans</li>
              </ul>
            </div>
          </div>
        
          
        </div>
      </footer>
    </div>
  );
}
