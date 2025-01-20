import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-48">
          {/* Email Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-gray-400">kgp.1562007@gmail.com</p>
            </div>
          </div>
          {/* Location Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Location</h3>
              <p className="text-gray-400">Rajkot - India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
