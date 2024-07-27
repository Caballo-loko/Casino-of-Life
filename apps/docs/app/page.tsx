import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <Image
            className={styles.backgroundImage}
            src="/apps/docs/app/SZbackground.svg"
            alt="Subzero AIagent"
            fill
            priority
          />
        </div>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            The beginning of the Casino of life <code>app/page.tsx</code>
          </li>
          <li>Bet your Sol for FreeDUMBS on the machine in Mortal Kombat.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deposit your Sol now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Find a Machine for Kombat
          </a>
        </div>
        <Button appName="docs" className={styles.secondary}>
          Open alert
        </Button>
      </main>
    </div>
  );
}