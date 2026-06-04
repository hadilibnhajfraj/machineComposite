import React from 'react'
import { Box, Container, Typography, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PublicIcon from '@mui/icons-material/Public'
import GroupsIcon from '@mui/icons-material/Groups'
import VerifiedIcon from '@mui/icons-material/Verified'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const stats = [
  { icon: <EmojiEventsIcon sx={{ fontSize: 32 }} />, value: 200, suffix: '+', label: 'Projets Réalisés', desc: 'Dans 3 continents', color: '#1976D2' },
  { icon: <PublicIcon sx={{ fontSize: 32 }} />, value: 50, suffix: '+', label: 'Pays Desservis', desc: 'Présence internationale', color: '#0288D1' },
  { icon: <GroupsIcon sx={{ fontSize: 32 }} />, value: 850, suffix: '+', label: 'Clients Satisfaits', desc: 'Partenariats durables', color: '#0097A7' },
  { icon: <VerifiedIcon sx={{ fontSize: 32 }} />, value: 15, suffix: '', label: 'Ans d\'Expérience', desc: 'Leader du marché', color: '#1976D2' },
  { icon: <TrendingUpIcon sx={{ fontSize: 32 }} />, value: 98, suffix: '%', label: 'Taux de Satisfaction', desc: 'Qualité certifiée', color: '#0288D1' },
  { icon: <AccessTimeIcon sx={{ fontSize: 32 }} />, value: 24, suffix: '/7', label: 'Support Disponible', desc: 'Réponse < 2 heures', color: '#0097A7' },
]

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box
        sx={{
          p: 3.5,
          borderRadius: '16px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.4s ease',
          '&:hover': {
            background: 'rgba(255,255,255,0.06)',
            border: `1px solid ${stat.color}40`,
            transform: 'translateY(-4px)',
            boxShadow: `0 16px 40px ${stat.color}20`,
          },
          '&::before': {
            content: '""',
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, ${stat.color}, transparent)`,
          },
        }}
      >
        <Box
          sx={{
            width: 60, height: 60, borderRadius: '14px', mx: 'auto', mb: 2,
            background: `${stat.color}15`,
            border: `1px solid ${stat.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: stat.color,
          }}
        >
          {stat.icon}
        </Box>

        <Typography
          sx={{
            fontSize: '2.8rem', fontWeight: 900, lineHeight: 1,
            background: `linear-gradient(135deg, #fff 0%, ${stat.color} 100%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            mb: 0.5,
          }}
        >
          {inView ? (
            <CountUp end={stat.value} duration={2.5} separator="," />
          ) : '0'}
          {stat.suffix}
        </Typography>

        <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem', mb: 0.5 }}>
          {stat.label}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>
          {stat.desc}
        </Typography>
      </Box>
    </motion.div>
  )
}

export default function StatisticsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #060D1A 0%, #0A1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient bg */}
      <Box
        sx={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(21,101,192,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              sx={{
                color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem',
                letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2,
              }}
            >
              — Nos Chiffres
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em',
              }}
            >
              L'Excellence en{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #42A5F5, #1976D2)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Chiffres
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Des résultats concrets qui témoignent de notre engagement envers l'excellence industrielle.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={stat.label}>
              <StatCard stat={stat} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
