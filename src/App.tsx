import { Heart, Activity, Droplet, Brain, Gauge, Moon, Plus, Wind } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MA</span>
              </div>
              <span className="text-sm text-gray-600">Dr. Mujtaba Ahmed Siddiqui</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Home</a>
              <a href="#treatments" className="text-gray-600 hover:text-blue-600">Treatments</a>
              <a href="#health-blogs" className="text-gray-600 hover:text-blue-600">Health Blogs</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About Me</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="inline-block relative mb-6">
              <div className="w-48 h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto">
                <div className="relative">
                  <div className="w-32 h-32 bg-white rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-6xl font-bold text-green-500">m+</span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Dr. Mujtaba Ahmed Siddiqui</h1>
            <p className="text-gray-600 mb-1">General Physician & Diabetologist</p>
            <p className="text-sm text-gray-500 mb-6">MBBS / PGALEN / HLD</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition">
              BOOK APPOINTMENT
            </button>
          </div>

          <div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Book a Clinic Appointment</h2>
              <div className="bg-green-50 rounded-xl p-4 mb-4">
                <p className="text-green-700 font-medium mb-1">No Slots Available</p>
                <p className="text-sm text-gray-600">No time slots are available at the clinic for online booking</p>
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition flex items-center justify-center">
                Book Clinic Visit
                <span className="ml-2 text-xs">(Returning visit)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md text-center border border-gray-100">
            <div className="text-5xl font-bold text-blue-600 mb-2">4.9</div>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E" alt="Google" className="h-6 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">rating (87)</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md text-center border border-gray-100">
            <div className="text-5xl font-bold text-blue-600 mb-2">100</div>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E" alt="Google" className="h-6 mx-auto mb-2" />
            <p className="text-gray-600 text-sm">stories</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md text-center border border-gray-100">
            <div className="text-5xl font-bold text-blue-600 mb-2">7+</div>
            <div className="flex justify-center items-center mb-2">
              <span className="text-4xl">📚</span>
            </div>
            <p className="text-gray-600 text-sm">Years of Experience</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dr. Mujtaba Ahmed Siddiqui is a renowned and experienced General Physician & Diabetologist in Hyderabad, with over 7+ years of dedicated medical practice. His expertise spans across diabetes management, thyroid disorders, cardiovascular care, and general internal medicine.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dr. Siddiqui completed his MBBS and pursued advanced certifications in diabetology (PGALEN) and healthcare leadership (HLD). He is committed to providing comprehensive, patient-centered care with a focus on preventive medicine and chronic disease management.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Known for his compassionate approach and evidence-based treatment methods, Dr. Siddiqui has successfully treated thousands of patients, helping them achieve better health outcomes and improved quality of life.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition">
              BOOK APPOINTMENT
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical consultation"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E" alt="Google" className="h-8 mx-auto mb-6" />
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Patient"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-gray-900 mb-1">Nawaz Saifi</h3>
              <div className="flex justify-center mb-3">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <p className="text-gray-600 italic">
                Good treatment Dr is very good person very less I recommend to visit this
              </p>
            </div>
            <div className="flex justify-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Treatments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplet className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Diabetes Management</h3>
            <p className="text-sm text-gray-600">Comprehensive diabetes care including blood sugar monitoring, medication management, lifestyle counseling, and prevention of complications</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Thyroid Disease</h3>
            <p className="text-sm text-gray-600">Expert diagnosis and treatment of hypothyroidism, hyperthyroidism, thyroid nodules, and related hormonal imbalances</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Heart Problems</h3>
            <p className="text-sm text-gray-600">Cardiovascular risk assessment, management of heart disease, cholesterol control, and heart-healthy lifestyle guidance</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gauge className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Blood Pressure Management</h3>
            <p className="text-sm text-gray-600">Hypertension treatment, regular monitoring, medication optimization, and dietary interventions for optimal blood pressure control</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wind className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Respiratory Problems</h3>
            <p className="text-sm text-gray-600">Treatment of asthma, COPD, bronchitis, and other respiratory conditions with focus on breathing improvement and symptom relief</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Migraine & Headaches</h3>
            <p className="text-sm text-gray-600">Specialized migraine treatment, trigger identification, preventive therapies, and pain management for chronic headache sufferers</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Pain Management</h3>
            <p className="text-sm text-gray-600">Comprehensive pain relief strategies for chronic pain, arthritis, joint pain, and musculoskeletal disorders</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Moon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Gastric Disorders</h3>
            <p className="text-sm text-gray-600">Treatment of acid reflux, gastritis, IBS, indigestion, and other digestive system problems with effective symptom management</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded font-medium hover:bg-blue-50 transition">
            VIEW MORE
          </button>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="health-blogs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Latest Blogs</h2>
        <div className="w-20 h-1 bg-blue-600 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Asthma blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Understanding Asthma: Symptoms, Triggers, and Treatment</h3>
              <p className="text-sm text-gray-600 mb-4">
                Asthma is a chronic respiratory condition that affects millions worldwide. Learn about common triggers, warning signs, and effective management strategies to breathe easier and live better.
              </p>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Read More →</a>
                <span className="text-sm text-gray-500">📅 Sept 6th, 2022</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Diabetes blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Living Well with Diabetes: A Complete Guide</h3>
              <p className="text-sm text-gray-600 mb-4">
                Discover practical tips for managing diabetes effectively. From blood sugar monitoring to nutrition and exercise, learn how to maintain a healthy, active lifestyle while keeping your condition under control.
              </p>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Read More →</a>
                <span className="text-sm text-gray-500">📅 April 6th, 2022</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Thyroid blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-gray-900 mb-3">Thyroid Health: Separating Myths from Facts</h3>
              <p className="text-sm text-gray-600 mb-4">
                There's a lot of misinformation about thyroid disorders. Get the facts straight about symptoms, diagnosis, treatment options, and what really matters for better thyroid health and overall wellbeing.
              </p>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Read More →</a>
                <span className="text-sm text-gray-500">📅 Sept 4th, 2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded font-medium hover:bg-blue-50 transition">
            READ MORE
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">FAQs</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-4">
            {[
              "Why should I consult Dr. Mujtaba Ahmed Siddiqui?",
              "Why is it best to consult a specialist?",
              "How can I book an appointment with Dr. Mujtaba Ahmed Siddiqui?",
              "What are the different modes of consultation?",
              "Are online guidelines followed in Dr. Mujtaba Ahmed Siddiqui's consultation chamber?",
              "What is my query is not listed here?"
            ].map((question, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition flex justify-between items-center cursor-pointer">
                <span className="text-gray-800 font-medium">{question}</span>
                <Plus className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white">About Me</a></li>
                <li><a href="#" className="hover:text-white">Health Blog</a></li>
                <li><a href="#" className="hover:text-white">Treatments</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Our Treatments</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white">Diabetes Management</a></li>
                <li><a href="#" className="hover:text-white">Thyroid Disease</a></li>
                <li><a href="#" className="hover:text-white">Heart Problems</a></li>
                <li><a href="#" className="hover:text-white">B.P. Management</a></li>
                <li><a href="#" className="hover:text-white">Respiratory Problems</a></li>
                <li><a href="#" className="hover:text-white">Migraine</a></li>
                <li><a href="#" className="hover:text-white">Pain Management</a></li>
                <li><a href="#" className="hover:text-white">Gastric disorders</a></li>
              </ul>
            </div>

            <div className="relative">
              <button className="absolute bottom-0 right-0 bg-white text-blue-700 rounded-full p-4 shadow-lg hover:shadow-xl transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
