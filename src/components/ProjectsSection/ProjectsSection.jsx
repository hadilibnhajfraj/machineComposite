import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Chip, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const projects = [
  {
    id: 1, title: 'Complexe Résidentiel El Yasmine',
    category: 'Résidentiel', location: 'Alger, Algérie',
    desc: 'Fourniture et installation de systèmes de coffrage modulaire pour 24 tours résidentielles de 18 étages chacune.',
    tags: ['Coffrage', 'Levage'], year: '2023',
    image: '/images/project-1.jpg', span: 2,
    color: '#1565C0',
  },
  {
    id: 2, title: 'Pont Autoroutier A1',
    category: 'Infrastructure', location: 'Tunis, Tunisie',
    desc: 'Équipements de levage spéciaux pour la construction du tablier du pont principal.',
    tags: ['Levage', 'Infrastructure'], year: '2022',
    image: '/images/project-2.jpg', span: 1,
    color: '#0288D1',
  },
  {
    id: 3, title: 'Usine Pétrochimique SONATRACH',
    category: 'Industriel', location: 'Oran, Algérie',
    desc: 'Solution complète d\'outillage industriel certifié ATEX pour zone dangereuse.',
    tags: ['Outillage', 'ATEX'], year: '2023',
    image: '/images/project-3.jpg', span: 1,
    color: '#0097A7',
  },
  {
    id: 4, title: 'Métro d\'Alger Extension Ligne 2',
    category: 'Transport', location: 'Alger, Algérie',
    desc: 'Fourniture de tunneliers et d\'équipements de forage pour l\'extension souterraine de 8km.',
    tags: ['Tunnelier', 'Automatisation'], year: '2021',
    image: '/images/project-4.jpg', span: 1,
    color: '#1565C0',
  },
  {
    id: 5, title: 'Port Commercial Annaba',
    category: 'Maritime', location: 'Annaba, Algérie',
    desc: 'Grues de quai et équipements de manutention portuaire pour le nouveau terminal conteneurs.',
    tags: ['Levage', 'Maritime'], year: '2022',
    image: '/images/project-5.jpg', span: 1,
    color: '#0288D1',
  },
  {
    id: 6, title: 'Hôtel 5 Étoiles Marriott',
    category: 'Hôtellerie', location: 'Casablanca, Maroc',
    desc: 'Systèmes de coffrage grimpant pour la construction de la tour principale de 42 étages.',
    tags: ['Coffrage', 'Grande Hauteur'], year: '2023',
    image: '/images/project-6.jpg', span: 2,
    color: '#0097A7',
  },
]

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hovered, setHovered] = useState(false)

  return (
    <Grid item xs={12} sm={project.span === 2 ? 12 : 6} md={project.span === 2 ? 8 : 4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.08 }}
      >
        <Box
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            borderRadius: '20px', overflow: 'hidden', cursor: 'pointer',
            height: project.span === 2 ? { xs: 280, md: 360 } : { xs: 260, md: 320 },
            position: 'relative',
            background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
            border: '1px solid rgba(255,255,255,0.07)',
            transition: 'all 0.4s ease',
            '&:hover': {
              border: `1px solid ${project.color}40`,
              boxShadow: `0 24px 60px rgba(0,0,0,0.4)`,
              transform: 'translateY(-4px)',
            },
          }}
        >
          {/* Background image */}
          <Box
            sx={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              transition: 'transform 0.6s ease',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
            }}
          />

          {/* Gradient overlay */}
          <Box
            sx={{
              position: 'absolute', inset: 0,
              background: hovered
                ? 'linear-gradient(to top, rgba(6,13,26,0.9) 0%, rgba(6,13,26,0.4) 100%)'
                : 'linear-gradient(to top, rgba(6,13,26,0.85) 0%, rgba(6,13,26,0.2) 70%)',
              transition: 'background 0.4s ease',
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: 'absolute', inset: 0, p: 3,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            }}
          >
            {/* Top badges */}
            <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 1 }}>
              <Chip
                label={project.category}
                size="small"
                sx={{
                  background: `${project.color}CC`, color: '#fff',
                  fontWeight: 600, fontSize: '0.72rem',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <Chip
                label={project.year}
                size="small"
                sx={{
                  background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.72rem', backdropFilter: 'blur(8px)',
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, mb: 0.5 }}>
              <LocationOnIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, mt: '3px' }} />
              <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.76rem' }}>
                {project.location}
              </Typography>
            </Box>

            <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 1, fontSize: project.span === 2 ? '1.2rem' : '1rem' }}>
              {project.title}
            </Typography>

            <motion.div
              animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.5, mb: 1.5 }}>
                {project.desc}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <Chip
                    key={tag} label={tag} size="small"
                    sx={{
                      fontSize: '0.7rem', background: 'rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.75)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Open icon */}
          <Box
            sx={{
              position: 'absolute', top: 16, right: 16,
              opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
            }}
          >
            <Box
              sx={{
                width: 36, height: 36, borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <OpenInNewIcon sx={{ color: '#fff', fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  )
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, background: '#060D1A', position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={{ color: '#42A5F5', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2 }}>
              — Portfolio
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, color: '#fff', mb: 2, letterSpacing: '-0.02em' }}>
              Nos{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #42A5F5, #1976D2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Réalisations
              </Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 560, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Des projets d'envergure qui témoignent de notre capacité à relever les défis les plus complexes.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={2.5}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 7 }}>
          <Button component={Link} to="/projects" variant="outlined" color="primary" size="large" endIcon={<ArrowForwardIcon />} sx={{ px: 5 }}>
            Voir tous les projets
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
