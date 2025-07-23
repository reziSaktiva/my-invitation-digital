import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

async function getSheet() {
    await doc.loadInfo();
    return doc.sheetsByIndex[0];
}

export async function GET() {
    try {
        const sheet = await getSheet();
        const rows = await sheet.getRows();
        const wishes = rows.map(row => ({
            id: row.get('id'), // Use the new unique ID
            name: row.get('name'),
            message: row.get('message'),
            timestamp: row.get('timestamp'),
        })).reverse(); // Show newest first
        return NextResponse.json(wishes);
    } catch (error) {
        console.error('Error fetching wishes:', error);
        return NextResponse.json({ message: 'Error fetching wishes' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { name, message } = await request.json();
        const ip = request.headers.get('x-forwarded-for') ?? 'N/A';

        if (!name || !message) {
            return NextResponse.json({ message: 'Name and message are required' }, { status: 400 });
        }

        const sheet = await getSheet();
        const newRow = {
            id: crypto.randomUUID(),
            timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }),
            name,
            message,
            ip_address: ip,
        };
        await sheet.addRow(newRow);

        // Return only the necessary parts to the client
        const clientSafeWish = {
            id: newRow.id,
            name: newRow.name,
            message: newRow.message,
            timestamp: newRow.timestamp
        };

        return NextResponse.json({ message: 'Wish added!', wish: clientSafeWish });

    } catch (error) {
        console.error('Error adding wish:', error);
        return NextResponse.json({ message: 'Error adding wish' }, { status: 500 });
    }
} 