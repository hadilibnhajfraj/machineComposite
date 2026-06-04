import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Container, Chip } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const slides = [
  {
    tag: 'Innovation Industrielle',
    title: 'Machines de Construction',
    highlight: 'Haute Performance',
    subtitle: 'Solutions technologiques avancées pour les chantiers de demain. Fiabilité, puissance et précision au service de vos projets les plus ambitieux.',
    cta: 'Découvrir nos solutions',
    bg: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D1F3C 100%)',
    accent: '#1976D2',
  },
  {
    tag: 'Expertise Certifiée',
    title: 'Équipements Industriels',
    highlight: 'Nouvelle Génération',
    subtitle: 'Plus de 15 ans d\'expertise dans la fourniture d\'équipements industriels certifiés aux normes internationales les plus strictes.',
    cta: 'Voir nos produits',
    bg: 'linear-gradient(135deg, #060D1A 0%, #0A1F2E 50%, #0A2840 100%)',
    accent: '#0288D1',
  },
  {
    tag: 'Partenaire de Confiance',
    title: 'Solutions Clés en Main',
    highlight: 'Pour vos Chantiers',
    subtitle: 'De l\'installation à la maintenance, nous vous accompagnons à chaque étape avec un support technique disponible 24h/24.',
    cta: 'Contactez-nous',
    bg: 'linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #112240 100%)',
    accent: '#1565C0',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute', inset: 0,
            background: slide.bg,
          }}
        />
      </AnimatePresence>

      {/* Grid overlay */}
      <Box
        sx={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(21,101,192,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,101,192,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Glow orbs */}
      <Box sx={{
        position: 'absolute', top: '15%', right: '10%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21,101,192,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse 4s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.15)', opacity: 1 },
        },
      }} />
      <Box sx={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(66,165,245,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, pt: 12 }}>
        <Box sx={{ maxWidth: 800 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Chip
                label={slide.tag}
                sx={{
                  mb: 3,
                  background: 'rgba(21,101,192,0.2)',
                  border: '1px solid rgba(21,101,192,0.5)',
                  color: '#42A5F5',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  backdropFilter: 'blur(10px)',
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem', lg: '5rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 1,
                  color: '#fff',
                  letterSpacing: '-0.03em',
                }}
              >
                {slide.title}
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4.2rem', lg: '5rem' },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 3,
                  background: `linear-gradient(135deg, #42A5F5, #1976D2)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.03em',
                }}
              >
                {slide.highlight}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: 600,
                }}
              >
                {slide.subtitle}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 4, py: 1.8, fontSize: '1rem' }}
                >
                  {slide.cta}
                </Button>
                <Button
                  component={Link}
                  to="/projects"
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    px: 4, py: 1.8, fontSize: '1rem',
                    borderColor: 'rgba(255,255,255,0.25)',
                    color: 'rgba(255,255,255,0.85)',
                    '&:hover': {
                      borderColor: '#42A5F5',
                      color: '#42A5F5',
                      background: 'rgba(66,165,245,0.08)',
                    },
                  }}
                >
                  Nos Réalisations
                </Button>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Stats bar */}
        <Box
          sx={{
            mt: 10,
            display: 'flex',
            gap: { xs: 3, md: 6 },
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '15+', label: 'Années d\'expérience' },
            { value: '200+', label: 'Projets réalisés' },
            { value: '50+', label: 'Pays desservis' },
            { value: '98%', label: 'Clients satisfaits' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Box>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#42A5F5', lineHeight: 1 }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', mt: 0.5, letterSpacing: '0.05em' }}>
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Slide indicators */}
      <Box
        sx={{
          position: 'absolute', bottom: 80, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', gap: 1, zIndex: 3,
        }}
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrent(i)}
            sx={{
              height: 4, borderRadius: 2, cursor: 'pointer',
              transition: 'all 0.4s ease',
              background: i === current ? '#1976D2' : 'rgba(255,255,255,0.3)',
              width: i === current ? 32 : 12,
            }}
          />
        ))}
      </Box>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <KeyboardArrowDownIcon sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 32 }} />
      </motion.div>
    </Box>
  )
}
