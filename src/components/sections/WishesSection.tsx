'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, User, MessageSquare, Loader2 } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface Wish {
    id: string | number;
    name: string;
    message: string;
    timestamp: string;
}

export function WishesSection() {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    const fetchWishes = async () => {
        try {
            const res = await fetch('/api/wishes');
            if (res.ok) {
                const data = await res.json();
                setWishes(data);
            }
        } catch (error) {
            console.error('Failed to fetch wishes', error);
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        fetchWishes();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name && message) {
            setIsLoading(true);
            try {
                const res = await fetch('/api/wishes', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, message }),
                });

                if (res.ok) {
                    const newWish = await res.json();
                    setWishes([newWish.wish, ...wishes]);
                    setName('');
                    setMessage('');
                } else {
                    // Handle error notification if you want
                    console.error('Failed to submit wish');
                }
            } catch (error) {
                console.error('Error submitting wish:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <section className="bg-[#FBF6EE] py-20">
            <div className="container mx-auto px-4">
                <SectionTitle
                    firstText="Wedding"
                    secondText="Wishes"
                    firstColor="text-[#3A4D39]"
                    secondColor="text-[#D3738D]"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 max-w-2xl mx-auto bg-white/70 p-8 rounded-xl shadow-lg border border-white/80"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <Input
                                type="text"
                                placeholder="Nama Anda"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-12 bg-white"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-5 text-gray-400" size={20} />
                            <Textarea
                                placeholder="Tulis ucapan dan doa Anda..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="pl-12 pt-4 bg-white min-h-[120px]"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        <Button type="submit" className="w-full bg-[#D3738D] hover:bg-[#c5637c] text-white py-6" disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 size={18} className="mr-2 animate-spin" />
                            ) : (
                                <Send size={18} className="mr-2" />
                            )}
                            {isLoading ? 'Mengirim...' : 'Kirim Ucapan'}
                        </Button>
                    </form>
                </motion.div>

                <div className="mt-16 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-[#3A4D39] mb-6 text-center">
                        {wishes.length > 0 ? `${wishes.length} Ucapan` : 'Jadilah yang pertama memberi ucapan!'}
                    </h3>
                    {isFetching ? (
                        <div className="flex justify-center items-center h-40">
                            <Loader2 className="text-[#D3738D] animate-spin" size={40} />
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id.toString()}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white/50 p-6 rounded-lg shadow-md border border-white/60"
                                >
                                    <div className="flex justify-between items-start">
                                        <p className="font-bold text-[#3A4D39] text-lg">{wish.name}</p>
                                        <p className="text-xs text-gray-500">{wish.timestamp}</p>
                                    </div>
                                    <p className="mt-3 text-gray-700">{wish.message}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
