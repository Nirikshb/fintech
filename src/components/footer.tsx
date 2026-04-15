import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">GREYOAK CAPITAL</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Quantitative intelligence for disciplined market participants. Precision-driven strategies for the modern investor.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/strategy">Strategy</Link></li>
              <li><Link href="/intelligence">Intelligence</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/disclosures">Disclosures</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Greyoak Capital. All rights reserved.</p>
          <p className="mt-2">
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
