'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import { Button } from '../ui/button';
import ChessboardDivider from '../ChessboardDivider';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Account = {
    bank: string;
    accountNumber: string;
    accountHolder: string;
};

type PersonData = {
    name: string;
    accounts: Account[];
};

const giftData: Record<string, PersonData> = {
    groom: {
        name: 'Rezi',
        accounts: [
            {
                bank: 'BCA',
                accountNumber: '6765044611',
                accountHolder: 'Rezi Saktiva',
            },
        ],
    },
    bride: {
        name: 'Pracilia',
        accounts: [
            {
                bank: 'BCA',
                accountNumber: '4380415556',
                accountHolder: 'Pracilia Aldri Pertiwi',
            },
            {
                bank: 'BJB',
                accountNumber: '0135457531101',
                accountHolder: 'Pracilia Aldri Pertiwi',
            },
        ],
    },
};

const BankSelector: React.FC<{ person: PersonData }> = ({ person }) => {
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (selectedAccount) {
            navigator.clipboard.writeText(selectedAccount.accountNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="bg-white/60 p-6 rounded-xl shadow-lg border border-white/70 w-full">
            <h3 className="text-3xl text-[#5C4033] mb-6" style={{ fontFamily: '"Great Vibes", cursive' }}>
                {person.name}
            </h3>
            <Select onValueChange={(value) => setSelectedAccount(person.accounts.find(acc => acc.bank === value) || null)}>
                <SelectTrigger className="w-full bg-white text-[#5C4033]">
                    <SelectValue placeholder="Pilih Bank" />
                </SelectTrigger>
                <SelectContent>
                    {person.accounts.map(account => (
                        <SelectItem key={account.bank} value={account.bank}>
                            {account.bank}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <AnimatePresence>
                {selectedAccount && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="bg-white p-4 rounded-lg shadow-inner text-left overflow-hidden"
                    >
                        <p className="font-bold text-lg text-[#5C4033]">{selectedAccount.accountNumber}</p>
                        <p className="text-sm text-[#5C4033]/70">a/n {selectedAccount.accountHolder}</p>
                        <Button
                            onClick={handleCopy}
                            className="w-full mt-3 bg-[#D3738D] hover:bg-[#c5637c] text-white rounded-md transition-all duration-300"
                        >
                            <Copy size={16} className="mr-2" />
                            {copied ? 'Tersalin!' : 'Salin Nomor'}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


export function GiftSection() {
    return (
        <>
            <section className="bg-[#FBF6EE] py-20 relative">
                <div className="container mx-auto px-4 text-center">
                    <SectionTitle
                        firstText="Wedding"
                        secondText="Gift"
                        firstColor="text-[#5C4033]"
                        secondColor="text-[#D3738D]"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-4 max-w-2xl text-lg text-[#5C4033]/80"
                    >
                        Your presence is the greatest gift we could ever receive.
                        If you wish to give, please use the link below.
                    </motion.p>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <BankSelector person={giftData.groom} />
                        <BankSelector person={giftData.bride} />
                    </div>
                </div>
            </section>
            <ChessboardDivider />
        </>
    );
}
