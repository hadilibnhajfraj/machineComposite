import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build'
import EngineeringIcon from '@mui/icons-material/Engineering'
import SchoolIcon from '@mui/icons-material/School'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SecurityIcon from '@mui/icons-material/Security'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const services = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 36 }} />,
    title: 'Installation & Montage',
    description: 'Déploiement professionnel de vos équipements industriels avec nos techniciens certifiés. Mise en service rapide et fiable.',
    color: '#1565C0',
    glow: 'rgba(21,101,192,0.3)',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 36 }} />,
    title: 'Maintenance Préventive',
    description: 'Programmes de maintenance sur mesure pour maximiser la durée de vie de vos machines et éviter les pannes coûteuses.',
    color: '#0288D1',
    glow: 'rgba(2,136,209,0.3)',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 36 }} />,
    title: 'Formation Technique',
    description: 'Formations complètes pour vos équipes : opération, maintenance et sécurité. Certifications reconnues internationalement.',
    color: '#0097A7',
    glow: 'rgba(0,151,167,0.3)',
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 36 }} />,
    title: 'Audit & Diagnostic',
    description: 'Analyse approfondie de vos processus industriels pour identifier les axes d\'amélioration et optimiser votre productivité.',
    color: '#1565C0',
    glow: 'rgba(21,101,192,0.3)',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 36 }} />,
    title: 'Support 24/7',
    description: 'Assistance technique disponible en permanence. Notre équipe d\'experts répond à vos urgences en moins de 2 heures.',
    color: '#0288D1',
    glow: 'rgba(2,136,209,0.3)',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 36 }} />,
    title: 'Conformité & Sécurité',
    description: 'Mise aux normes de vos équipements selon les réglementations locales et internationales. Sécurité garantie sur chantier.',
    color: '#0097A7',
    glow: 'rgba(0,151,167,0.3)',
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            border: `1px solid ${service.color}60`,
            boxShadow: `0 20px 60px ${service.glow}`,
          },
          '&:hover .service-icon-box': {
            background: service.color,
            boxShadow: `0 8px 24px ${service.glow}`,
          },
          '&:hover .arrow-icon': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        }}
      >
        {/* Top accent line */}
        <Box
          sx={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${service.color}, transparent)`,
          }}
        />

        <CardContent sx={{ p: 3.5 }}>
          <Box
            className="service-icon-box"
            sx={{
              width: 64, height: 64, borderRadius: '14px',
              background: `${service.color}20`,
              border: `1px solid ${service.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              mb: 2.5, color: service.color,
              transition: 'all 0.4s ease',
            }}
          >
            {service.icon}
          </Box>

          <Typography variant="h6" fontWeight={700} mb={1.5} sx={{ color: '#fff' }}>
            {service.title}
          </Typography>

          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, mb: 2.5 }}>
            {service.description}
          </Typography>

          <Box
            className="arrow-icon"
            sx={{
              display: 'flex', alignItems: 'center', gap: 0.5,
              color: service.color, fontSize: '0.85rem', fontWeight: 600,
              opacity: 0, transform: 'translateX(-8px)',
              transition: 'all 0.3s ease',
            }}
          >
            En savoir plus <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 800, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21,101,192,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem',
                letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2,
              }}
            >
              — Nos Expertises
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800, color: '#fff', mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Services{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #42A5F5, #1976D2)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Industriels
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 560, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Des solutions complètes pour optimiser vos opérations industrielles, de l'installation à la maintenance continue.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={4} key={service.title}>
              <ServiceCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 7 }}>
          <Button
            component={Link}
            to="/services"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 5 }}
          >
            Tous nos services
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
