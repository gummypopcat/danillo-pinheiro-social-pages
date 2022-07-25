import NextLink from 'next/link';
import { ReactNode } from 'react';
import styles from './Link.module.scss';
import {NextPage} from 'next';

interface Props {
   children: ReactNode;
   href: string;
}

const Link: NextPage<Props> = (props: Props) => {
   return (
      <NextLink href={props.href}>
         <a className={styles.link}>{props.children}</a>
      </NextLink>
   );
};

export default Link;
