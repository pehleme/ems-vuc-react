/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, Fragment, useEffect, useMemo, useState } from "react";
import { FaChevronRight, FaSearch, FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "~/components";
import { PhysicianModel } from "~/data/models";
import { PhysicianService } from "~/services";

import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Divider,
  FormGroup,
  InputAdornment,
  InputLabel,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Pagination,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function ListPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [loading, setLoading] = useState(false);
  const [physicians, setPhysicians] = useState<PhysicianModel[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const pageCount = 5;

  const filteredPhysicians = useMemo(
    () =>
      physicians.filter(
        (physician) =>
          physician.name?.toLowerCase().includes(filter.toLowerCase()) ||
          physician.crm?.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter, physicians],
  );
  const paginatedPhysicians = useMemo(
    () => filteredPhysicians.slice((page - 1) * pageCount, page * pageCount),
    [filteredPhysicians, page],
  );
  const count = useMemo(
    () => Math.ceil(filteredPhysicians.length / pageCount),
    [filteredPhysicians],
  );

  useEffect(() => {
    const findAllPhysicians = async () => {
      try {
        setLoading(true);
        const list = await PhysicianService.findAll(/* state as object */);
        setPhysicians(list);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    findAllPhysicians();
  }, [state]);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setPage(1);
  };

  const handleSelect = (id?: string) => {
    navigate(`/loading/?${id}`);
  };

  return (
    <Fragment>
      <Header backRoute="/screening" backText="Lista de médicos">
        <Box display="flex" alignItems="center" height="100%">
          <Typography>
            {(state as any).line ?? ""} / {(state as any).sector ?? ""} /
            {(state as any).district ?? ""}
          </Typography>
        </Box>
      </Header>
      <Box display="flex" bgcolor="#F8F9FB" height="100%" p={5}>
        <Container maxWidth="md" sx={{ m: "auto" }}>
          <Container maxWidth="sm">
            <FormGroup>
              <InputLabel sx={{ mb: 2 }}>Buscar médico</InputLabel>
              <TextField
                onChange={handleFilterChange}
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaSearch />
                    </InputAdornment>
                  ),
                  placeholder: "Nome ou CRM",
                }}
                sx={{ mb: 3 }}
              />
            </FormGroup>
          </Container>
          <Paper variant="outlined" sx={{ borderRadius: "16px" }}>
            {loading ? (
              <Box textAlign="center" p={5}>
                <CircularProgress />
              </Box>
            ) : (
              <Fragment>
                <List>
                  {paginatedPhysicians.map((physician, i) => (
                    <Fragment key={physician.crm}>
                      <ListItemButton
                        onClick={() => handleSelect(physician.id)}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#CFDFE7" }}>
                            <FaUser />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={physician.name}
                          secondary={`CRM ${physician.crm}`}
                        />
                        <ListItemSecondaryAction>
                          <FaChevronRight />
                        </ListItemSecondaryAction>
                      </ListItemButton>
                      {paginatedPhysicians.length - 1 !== i && <Divider />}
                    </Fragment>
                  ))}
                </List>
                <Pagination
                  page={page}
                  onChange={handlePageChange}
                  count={count}
                  color="primary"
                  sx={{ py: 3, display: "flex", justifyContent: "center" }}
                />
              </Fragment>
            )}
          </Paper>
        </Container>
      </Box>
    </Fragment>
  );
}

export default ListPage;
