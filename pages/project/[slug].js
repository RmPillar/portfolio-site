import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../store/actions/app';

import Page from '../../components/site/Page';

import classNames from 'classnames';

import data from '../../assets/data/index.json';
import Hero from '../../components/project/Hero';
import Intro from '../../components/project/Intro';

export default function ProjectPage({ project }) {
  const { menuOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleModal(false));
  };

  return (
    <Page>
      <Hero data={project} />
      <Intro data={project} />

      <div
        onClick={onClick}
        className={classNames(
          'fixed inset-0 w-screen h-screen bg-black transition-opacity duration-500 z-20',
          {
            'opacity-50 pointer-events-auto': menuOpen,
            'opacity-0 pointer-events-none': !menuOpen,
          }
        )}
      ></div>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = data.projects.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  if (!data) {
    return {
      notFound: true,
    };
  }

  const [project] = data.projects.filter((project) => project.slug === slug);
  return {
    props: { project },
  };
}
