import { useState, useCallback, ReactNode, KeyboardEventHandler } from "react";
import { MainLayout } from "@sport50test/mainlayout";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid, { GridSize } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";

const sizeProps = {
  step: 1,
  min: 1,
  max: 12,
  type: "number"
};

const preventDefault: KeyboardEventHandler<HTMLInputElement> = evt =>
  evt.preventDefault();

export const HomePage = () => {
  const [tiles, setTiles] = useState<
    { id: number; width: GridSize; value: ReactNode }[]
  >([
    { id: 1, width: 1, value: "tile" },
    { id: 2, width: 1, value: "tile" }
  ]);
  const setWidth = useCallback(
    (id, width) =>
      setTiles(tiles.map(tile => (id === tile.id ? { ...tile, width } : tile))),
    [tiles, setTiles]
  );
  const getTile = useCallback(
    ({ id, width, value }) => (
      <Grid item key={id} xs={width}>
        {value}
        <Input
          required
          value={width}
          inputProps={sizeProps}
          onKeyPress={preventDefault}
          onChange={({ target: { value } }) =>
            value && setWidth(id, Number(value))
          }
        />
      </Grid>
    ),
    [setWidth]
  );

  return (
    <MainLayout>
      <AppBar position="sticky">
        <Toolbar>
          <Button>save</Button>
        </Toolbar>
      </AppBar>
      <div className="page">
        <Paper square component="aside">
          sidebar
        </Paper>
        <Grid container component="main">
          {tiles.map(getTile)}
        </Grid>
      </div>
      <style jsx>{`
        .page {
          display: flex;
          flex: 1 1 0%;
        }
        .page :global(aside) {
          width: 20rem;
          padding: 1rem;
        }
        .page :global(main) {
          flex: 1 1 0%;
          padding: 1rem;
        }
      `}</style>
    </MainLayout>
  );
};
