
import SkillIcon from './SkillIcon';
import { motion } from 'framer-motion';

// Import icons from various libraries within react-icons
import {
  SiPython, SiJavascript, SiGo, SiJenkins, SiJira, SiAnsible, SiTerraform, SiKubernetes, SiDocker,
  SiGithub, SiGitlab, SiLinux, SiNodedotjs, SiReact, SiMongodb, SiMysql, SiApache,
  SiGooglecloud, SiTekton, SiGrafana, SiElastic, SiRedhatopenshift, SiNextdotjs, SiRancher, SiStrapi,
  SiVercel, SiBitbucket, SiGithubactions, SiAdobe, SiIcinga
} from 'react-icons/si';
import { BiLogoAws } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";

import {
  FaWindows, FaGit, FaNodeJs, FaLinux, FaServer, FaTools, FaDatabase, FaClipboard, FaCircleNotch,
  FaCloud, FaPuzzlePiece
} from 'react-icons/fa';

import { IoTerminalOutline } from 'react-icons/io5';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function SkillsSection() {
  const skills = [
    { icon: SiPython, name: 'Python' },
    { icon: SiJavascript, name: 'Javascript' },
    { icon: SiGo, name: 'Go' },
    { icon: IoTerminalOutline, name: 'Bash Scripting' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: SiReact, name: 'React' },
    { icon: FaDatabase, name: 'SQL' },
    { icon: FaDatabase, name: 'SQLite' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: FaCircleNotch, name: 'Dynatrace' },
    { icon: SiElastic, name: 'Kibana' },
    { icon: SiIcinga, name: 'Icinga' },
    { icon: SiGrafana, name: 'Grafana' },
    { icon: SiAdobe, name: 'Adobe Analytics' },
    { icon: SiJenkins, name: 'Jenkins' },
    { icon: SiTekton, name: 'Tekton' },
    { icon: SiGithubactions, name: 'GitHub Actions' },
    { icon: SiGitlab, name: 'GitLab' },
    { icon: SiLinux, name: 'Linux' },
    { icon: FaWindows, name: 'Windows' },
    { icon: SiAnsible, name: 'Ansible' },
    { icon: FaTools, name: 'Ansible Tower' },
    { icon: SiTerraform, name: 'Terraform' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiKubernetes, name: 'Kubernetes' },
    { icon: SiRedhatopenshift, name: 'OpenShift' },
    { icon: SiRancher, name: 'Rancher' },
    { icon: FaServer, name: 'Akamai' },
    { icon: VscAzure, name: 'Azure' },
    { icon: SiGooglecloud, name: 'GCP' },
    { icon: SiJira, name: 'JIRA' },
    { icon: FaClipboard, name: 'Service Now' },
    { icon: FaTools, name: 'Microsoft Copilot Studio' },
    { icon: FaTools, name: 'n8n' },
    { icon: FaGit, name: 'Git' },
    { icon: SiGithub, name: 'GitHub' },
    { icon: SiBitbucket, name: 'Bitbucket' },
    { icon: FaTools, name: 'AEM' },
    { icon: FaTools, name: 'Citrix' },
    { icon: FaTools, name: 'Venafi' },
    { icon: FaTools, name: 'Strapi' },
    { icon: FaCloud, name: 'ELK Stack' },
    { icon: SiNextdotjs, name: 'Next.js' },
  ];

  // Duplicate skills for seamless loop
  const doubleSkills = [...skills, ...skills];

  return (
    <section className="container py-6 overflow-hidden">
      <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Technical Expertise</h2>
      <div className="relative">
        <motion.div
          animate={{
            x: [0, -50 * skills.length], // Adjust the value based on the width of each skill icon container (128px)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-8"
        >
          {doubleSkills.map((skill, index) => (
            <div key={index} className="flex-shrink-0">
              <SkillIcon {...skill} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
