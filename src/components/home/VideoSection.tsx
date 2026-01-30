import React from 'react';

export function VideoSection() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Video Nổi Bật</h2>

                <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/XHOmBV4js_E"
                        title="Tam Giang Capital Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
