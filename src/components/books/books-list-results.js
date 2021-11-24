import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { Book } from '../../__mocks__/books'

export const BooksListResults = ({ books, ...rest }) => {
  const pages = [5, 10, 25]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])

  // eslint-disable-next-line no-unused-vars
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>TITLE</TableCell>
                <TableCell>AUTHOR</TableCell>
                <TableCell>CATEGORY</TableCell>
                <TableCell>LANGUAGE</TableCell>
                <TableCell>DESCRIPTION</TableCell>
                <TableCell>RATING</TableCell>
                <TableCell>STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={8}>
                  <Typography
                    sx={{ textAlign: 'center', color: 'action.active' }}
                  >
                    No books have been added yet!
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={books.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={pages}
      />
    </Card>
  )
}

BooksListResults.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Book)),
}
