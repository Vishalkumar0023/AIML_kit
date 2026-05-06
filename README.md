# Vishal AI Academy Learning Platform

A full-stack learning platform built with Next.js App Router, Tailwind CSS, and Razorpay Checkout.

## Features

- Multi-page routing:
  - `/`
  - `/notes`
  - `/tutorials`
  - `/products`
  - `/product/[id]`
  - `/success`
- Two product flows:
  - Free Google Drive roadmap download
  - Paid Razorpay checkout for the Python starter kit
- Modular UI components:
  - `Navbar`
  - `ProductCard`
  - `NoteCard`
  - `TutorialCard`
  - `BuyNowButton`
- Mobile-first responsive layout
- Simple payment status persistence with local storage
- Razorpay test mode ready via environment variables

## Folder structure

```text
src/
  app/
    api/
      create-order/route.ts
    notes/page.tsx
    product/[id]/page.tsx
    products/page.tsx
    success/page.tsx
    tutorials/page.tsx
    layout.tsx
    page.tsx
  components/
    BuyNowButton.tsx
    Footer.tsx
    Navbar.tsx
    NoteCard.tsx
    ProductCard.tsx
    SectionHeading.tsx
    SuccessSummary.tsx
    SuccessToast.tsx
    TutorialCard.tsx
  lib/
    platform-content.ts
    razorpay.ts
    utils.ts
  types/
    index.ts
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Add the required Razorpay test keys to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=your_test_secret
RAZORPAY_MODE=test
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Razorpay test mode flow

1. Open `/products` or `/product/python-for-aiml-starter-kit`
2. Click `Buy Now`
3. The frontend calls `POST /api/create-order`
4. The backend creates a Razorpay order using your test keys
5. Razorpay Checkout opens in the browser
6. On success, the app stores the latest payment summary in local storage and redirects to `/success`

## Notes

- The free product uses a direct Google Drive link.
- The paid product is fixed at `₹99`.
- Payment verification is intentionally lightweight for this version; the project stores the latest success state in local storage as requested.
