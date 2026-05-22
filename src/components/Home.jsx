import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'

// Helper for scroll animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Masakan Indonesia" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 glass-dark"></div>
        </div>
        
        <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16"
        >
            <div className="glass p-8 md:p-12 rounded-3xl inline-block mx-auto">
                <span className="bg-mamaku-orange/20 text-mamaku-orange font-semibold px-4 py-1.5 rounded-full text-sm mb-6 inline-block uppercase tracking-wider">Premium & Autentik</span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Masakan Rumahan Indonesia<br />yang Dibuat Sepenuh Hati
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                    Kelezatan autentik dari dapur ibu-ibu Indonesia. Menggunakan bahan segar pilihan, resep turun-temurun, cocok untuk menyempurnakan berbagai acara spesial Anda.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#packages" className="px-8 py-4 bg-mamaku-orange text-white rounded-full font-semibold text-lg hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Lihat Paket Catering
                    </a>
                    <a href="https://wa.me/6282310991320" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-mamaku-brown border border-gray-200 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        Pesan Sekarang
                    </a>
                </div>
            </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div initial={{ opacity:0, x: -50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:w-1/2">
                    <div className="relative">
                        <img src="https://images.pexels.com/photos/3771801/pexels-photo-3771801.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dapur Mamaku" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
                        <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block">
                            <div className="text-4xl font-bold text-mamaku-orange mb-1">10+</div>
                            <div className="text-sm font-semibold text-gray-700">Tahun<br/>Pengalaman</div>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity:0, x: 50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sentuhan Kasih Ibu dalam Setiap Suapan</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Catering Mamaku berawal dari kecintaan sekelompok ibu-ibu Indonesia terhadap kekayaan rempah nusantara. Kami percaya bahwa makanan terbaik adalah yang dimasak dengan kesabaran, kebersihan, dan cinta—persis seperti masakan ibu di rumah.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="text-mamaku-orange" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Bahan Segar</h4>
                                <p className="text-sm text-gray-500">Sayur & daging segar</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="text-mamaku-green" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">100% Halal</h4>
                                <p className="text-sm text-gray-500">Terjamin kehalalannya</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-mamaku-cream relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-mamaku-orange font-semibold tracking-wider uppercase text-sm">Pilihan Menu</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Paket Catering Spesial</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pack 1 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass bg-white/60 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden">
                        <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Paket 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="inline-block bg-orange-100 text-mamaku-orange px-3 py-1 rounded-full text-xs font-bold mb-4">25 PORSI</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack 1</h3>
                    <div className="text-3xl font-bold text-mamaku-orange mb-6">Rp350.000</div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Nasi Putih</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Ayam Bakar / Goreng</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Sayur Asem</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Sambal Bajak</li>
                    </ul>
                    <a href="https://wa.me/6282310991320" className="block w-full text-center bg-mamaku-brown text-white py-3 rounded-xl font-semibold hover:bg-yellow-900">Pesan Sekarang</a>
                </motion.div>

                {/* Pack 2 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }} className="glass bg-white rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 border-2 border-mamaku-orange relative overflow-hidden shadow-xl group">
                    <div className="absolute top-0 right-0 bg-mamaku-orange text-white px-4 py-1 rounded-bl-xl font-bold text-sm z-10">BEST SELLER</div>
                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden">
                        <img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Paket 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="inline-block bg-orange-100 text-mamaku-orange px-3 py-1 rounded-full text-xs font-bold mb-4">50 PORSI</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack 2</h3>
                    <div className="text-3xl font-bold text-mamaku-orange mb-6">Rp700.000</div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Nasi Putih / Kuning</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Ayam Mentega</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Mie Goreng Spesial</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Capcay</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Kerupuk & Sambal</li>
                    </ul>
                    <a href="https://wa.me/6282310991320" className="block w-full text-center bg-mamaku-orange text-white py-3 rounded-xl font-semibold hover:bg-amber-600">Pesan Sekarang</a>
                </motion.div>

                {/* Pack 3 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }} className="glass bg-white/60 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-mamaku-brown text-white px-4 py-1 rounded-bl-xl font-bold text-sm z-10">VIP</div>
                    <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden">
                        <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Paket 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="inline-block bg-orange-100 text-mamaku-orange px-3 py-1 rounded-full text-xs font-bold mb-4">100 PORSI</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack 3</h3>
                    <div className="text-3xl font-bold text-mamaku-orange mb-6">Rp1.300.000</div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Full Paket Premium</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> 2 Pilihan Lauk Utama</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Lauk Pendamping</li>
                        <li className="flex items-center text-gray-600"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2" /> Buah & Puding</li>
                    </ul>
                    <a href="https://wa.me/6282310991320" className="block w-full text-center bg-mamaku-brown text-white py-3 rounded-xl font-semibold hover:bg-yellow-900">Pesan Sekarang</a>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-mamaku-orange font-semibold tracking-wider uppercase text-sm">Galeri Rasa</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Hidangan Menggugah Selera</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img src="https://images.pexels.com/photos/10582860/pexels-photo-10582860.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rendang" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <h3 className="text-white text-xl font-bold text-shadow">Rendang Daging Asli</h3>
                    </div>
                </motion.div>
                
                <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Nasi Kuning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-bold">Nasi Kuning</h3>
                    </div>
                </motion.div>

                <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img src="https://images.pexels.com/photos/12739943/pexels-photo-12739943.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ayam Bakar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-bold">Ayam Bakar Bumbu Rujak</h3>
                    </div>
                </motion.div>

                <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img src="https://images.pexels.com/photos/4181954/pexels-photo-4181954.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Soto Ayam" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-bold">Soto Segar</h3>
                    </div>
                </motion.div>

                <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-2xl overflow-hidden relative group cursor-pointer">
                    <img src="https://images.pexels.com/photos/11143876/pexels-photo-11143876.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Sambal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-bold">Lalapan & Sambal</h3>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-mamaku-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-mamaku-orange font-semibold tracking-wider uppercase text-sm">Kata Mereka</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Kepercayaan Pelanggan Kami</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass p-8 rounded-3xl">
                    <p className="text-gray-600 mb-6 italic">"Rasanya benar-benar seperti masakan ibu sendiri. Rendangnya juara dan bumbunya meresap sekali!"</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                            <img src="https://i.pravatar.cc/150?img=47" alt="Ibu Siti" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Siti Aminah</h4>
                            <p className="text-sm text-gray-500">Acara Syukuran</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass p-8 rounded-3xl">
                    <p className="text-gray-600 mb-6 italic">"Cocok banget untuk acara meeting di kantor. Bersih, elegan, dan porsinya pas banget."</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                            <img src="https://i.pravatar.cc/150?img=11" alt="Pak Budi" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Budi Santoso</h4>
                            <p className="text-sm text-gray-500">Manager HRD</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="glass p-8 rounded-3xl">
                    <p className="text-gray-600 mb-6 italic">"Packaging rapi, tepat waktu, pelayanan ramah. Tamu arisan saya semua memuji."</p>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                            <img src="https://i.pravatar.cc/150?img=5" alt="Ibu Rina" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Rina Melati</h4>
                            <p className="text-sm text-gray-500">Ibu Rumah Tangga</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn} className="bg-mamaku-dark rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="p-12 md:p-16 md:w-1/2 text-white flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Pesan Kapan Saja</h2>
                    <p className="text-gray-300 mb-10 text-lg">Ada pertanyaan tentang menu khusus? Jangan ragu hubungi kami.</p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-mamaku-orange mr-4 mt-1" />
                            <div>
                                <h4 className="text-sm text-gray-400 font-semibold">LOKASI</h4>
                                <p className="text-lg">Jl. Kenangan Indah No. 45</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <Phone className="w-6 h-6 text-mamaku-orange mr-4 mt-1" />
                            <div>
                                <h4 className="text-sm text-gray-400 font-semibold">WHATSAPP</h4>
                                <p className="text-lg font-bold">0823-1099-1320</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-mamaku-orange mr-4 mt-1" />
                            <div>
                                <h4 className="text-sm text-gray-400 font-semibold">EMAIL</h4>
                                <p className="text-lg">cateringmamaku@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 h-80 md:h-auto bg-gray-200">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24036984206!2d106.75883838332525!3d-6.229746358117621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1689592476123!5m2!1sid!2sid" 
                        className="w-full h-full border-0" loading="lazy"></iframe>
                </div>
            </motion.div>
        </div>
      </section>
    </>
  )
}
