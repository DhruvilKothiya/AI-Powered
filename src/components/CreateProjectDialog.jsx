import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Grid,
  IconButton,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';

const CreateProjectDialog = ({ open, onClose, onCreate }) => {
  const [name, setName] = useState('');
  const [template, setTemplate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (!name) return;
    onCreate({ name, documents: 0 });
    onClose();
    setName('');
    setTemplate('');
    setFile(null);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      fullWidth 
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxHeight: '90vh',
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pb: 1,
          fontSize: '1.25rem',
          fontWeight: 600,
        }}
      >
        Create New Project
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ px: 3, py: 2 }}>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 3 }}
        >
          Configure your project name, upload documents, and select key details to extract.
        </Typography>

        <Grid container spacing={3}>
          {/* Left Column - Project Configuration */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TextField
                label="Project Name"
                placeholder="e.g., Q1 2024 Invoices"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="medium"
              />

              <TextField
                select
                label="Template"
                fullWidth
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                size="medium"
                displayEmpty
              >
                <MenuItem value="">Select a template</MenuItem>
                <MenuItem value="invoice">Invoice Template</MenuItem>
                <MenuItem value="contract">Contract Template</MenuItem>
                <MenuItem value="resume">Resume Template</MenuItem>
              </TextField>

              <Box>
                <Typography 
                  variant="subtitle2" 
                  sx={{ mb: 1.5, fontWeight: 600, color: '#333' }}
                >
                  Upload Documents
                </Typography>
                <Box
                  sx={{
                    border: '2px dashed #d0d0d0',
                    borderRadius: 2,
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    bgcolor: '#fafafa',
                    '&:hover': { 
                      borderColor: '#1976d2',
                      bgcolor: '#f5f5f5',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <CloudUploadIcon sx={{ fontSize: 32, mb: 1, color: '#999' }} />
                  <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 500 }}>
                    Drop documents here or click to browse
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Supports PDF, DOCX, TXT files up to 10MB each
                  </Typography>
                  <input
                    type="file"
                    hidden
                    multiple
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Select Fields to Extract */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 1.5, fontWeight: 600, color: '#333' }}
              >
                Select Fields to Extract
              </Typography>
              <Box 
                sx={{ 
                  minHeight: 200,
                  p: 2,
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  bgcolor: '#fafafa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ textAlign: 'center' }}
                >
                  No fields available.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, py: 2, gap: 1 }}>
        <Button 
          onClick={onClose} 
          variant="outlined"
          sx={{ 
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          disabled={!name}
          sx={{ 
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
            bgcolor: '#1976d2',
            '&:hover': {
              bgcolor: '#1565c0',
            },
          }}
        >
          Create Project
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectDialog;
