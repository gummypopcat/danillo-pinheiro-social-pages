import NextLink from 'next/link';
import { ReactNode } from 'react';
import styles from './Link.module.scss';

interface Props {
   children: ReactNode;
   href: string;
}

export default function Link(props: Props) {
   return (
      <NextLink href={props.href}>
         <a className={styles.link}>{props.children}</a>
      </NextLink>
   )
}
