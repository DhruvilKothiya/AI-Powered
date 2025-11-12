import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Divider,
  Collapse,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import CreateProjectDialog from './CreateProjectDialog';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});
  const [projects, setProjects] = useState([
    { 
      name: 'testing', 
      documents: [
        { name: '2 documents', count: 2 }
      ]
    },
    { 
      name: 'test', 
      documents: [
        { name: '1 documents', count: 1 }
      ]
    },
  ]);

  const handleNewProject = (project) => {
    setProjects([...projects, { ...project, documents: [] }]);
  };

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        sx={{
          width: isMobile ? '100%' : 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isMobile ? '100%' : 240,
            boxSizing: 'border-box',
            bgcolor: '#fafafa',
            borderRight: '1px solid #e0e0e0',
            height: isMobile ? 'auto' : 'calc(100vh - 64px)',
            position: 'relative',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              color: '#333',
              mb: 2
            }}
          >
            Projects
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ 
              mb: 2,
              bgcolor: '#1976d2',
              '&:hover': {
                bgcolor: '#1565c0',
              },
              textTransform: 'none',
              fontWeight: 500,
            }}
            onClick={() => setOpen(true)}
          >
            + Create New Project
          </Button>
        </Box>
        
        <List sx={{ px: 1 }}>
          {projects.map((project, index) => (
            <Box key={index}>
              <ListItem 
                button 
                onClick={() => toggleProject(index)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <FolderIcon sx={{ color: '#666', fontSize: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={project.name}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#333',
                  }}
                />
                {expandedProjects[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              
              <Collapse in={expandedProjects[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {project.documents.map((doc, docIndex) => (
                    <ListItem 
                      key={docIndex}
                      button
                      sx={{ 
                        pl: 4,
                        py: 0.5,
                        borderRadius: 1,
                        mx: 1,
                        '&:hover': {
                          bgcolor: '#f0f0f0',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <DescriptionIcon sx={{ color: '#999', fontSize: 16 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={doc.name}
                        primaryTypographyProps={{
                          fontSize: '0.8rem',
                          color: '#666',
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
      </Drawer>

      <CreateProjectDialog
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleNewProject}
      />
    </>
  );
};

export default Sidebar;
