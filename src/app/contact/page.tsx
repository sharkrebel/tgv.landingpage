import React from 'react';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-8">Contact Us</h1>
                        <p className="text-lg text-slate-600 mb-8">
                            We are always looking for new partners and opportunities. Reach out to us for inquiries or collaboration.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-slate-900">Address</h3>
                                <p className="text-slate-600">HCMC, Vietnam</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Email</h3>
                                <p className="text-slate-600">contact@tamgiangcapital.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none h-32" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
